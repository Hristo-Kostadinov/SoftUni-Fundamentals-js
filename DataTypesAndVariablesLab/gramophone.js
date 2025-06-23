function gramophone (band, album, song) {

    let secondAmount = (album.length * band.length) * song.length / 2;

    let rotationAmount = secondAmount / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotationAmount)} times.`);


}
gramophone('Black Sabbath', 'Paranoid','War Pigs')