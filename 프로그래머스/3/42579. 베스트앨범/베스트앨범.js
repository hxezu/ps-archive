function solution(genres, plays) {
    const genreMap = new Map()
    const genreSum = new Map()
    const result =[]
    
    genres.forEach((genre,index)=>{
        if(!genreMap.has(genre)) genreMap.set(genre, [])
        genreMap.get(genre).push({index: index, play: plays[index]})
        
        genreSum.set(genre, (genreSum.get(genre)||0)+plays[index])
    })
    
    const sortedGenres = [...genreSum.entries()]
    .sort((a,b)=> b[1]-a[1])
    .map(entry => entry[0])
    
    sortedGenres.forEach(genre=>{
        const songs = genreMap.get(genre)
        .sort((a,b)=> b.play-a.play || a.index-b.index)
        
        result.push(songs[0].index)
        if(songs.length>1) result.push(songs[1].index)
    })
    return result
}