document.getElementById('pobierz-dane-get').onclick = () => {
    $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done( data => {
            document.getElementsByTagName('h1')[0].innerText = 'Metoda get()';
            document.getElementsByTagName('h2')[0].innerText = data.title;
            
            document.getElementsByTagName('p')[0].innerText = data.body;
            document.getElementsByTagName('p')[1].innerText = `ID: ${data.id}, userID: ${data.userId}`;
        })
};


document.getElementById('pobierz-dane-getJSON').onclick = () => {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done( data => {
            document.getElementsByTagName('h1')[0].innerText = 'Metoda getJson()';
            document.getElementsByTagName('h2')[0].innerText = data.title;
            
            document.getElementsByTagName('p')[0].innerText = data.body;
            document.getElementsByTagName('p')[1].innerText = `ID: ${data.id}, userID: ${data.userId}`;
        })
};