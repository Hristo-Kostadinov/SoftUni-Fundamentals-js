function modernTimesOfHashtag (text) {

    const words = text.split(' ');
    const hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    
    const pattern = /\b[A-Z a-z]+\b/;

    for (let hashtag of hashWords) {
        hashtag = hashtag.substring(1);

        if (pattern.test(hashtag)) {
            console.log(hashtag);
        }
    }

}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')