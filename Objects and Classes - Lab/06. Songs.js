function songs(input){
    class Song{
        constructor(typelistOfSong,name,time){
            this.typelistOfSong=typelistOfSong;
            this.name=name;
            this.time=time;
        }
        printSong(){
            console.log(`${this.name}`)
        }
    }
    let songs=[];
    let numOfSongs=input.shift();
    let typelist=input.pop();
    for(let i=0;i<numOfSongs;i++){
        let [typelistOfSong,name,time]=input[i].split('_');
        let song= new Song(typelistOfSong,name,time)
        songs.push(song);
    }
    if(typelist==="all"){
        for(let song of songs){
            song.printSong();
        }
    }else {
        for(let song of songs){
            if(song.typelistOfSong===typelist){
                song.printSong();
            }
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])