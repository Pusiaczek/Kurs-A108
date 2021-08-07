const getData = () => {   
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then (response => response.json())
        .then( data => {
            document.getElementsByTagName('h2')[0].innerText = data.title;
            
            document.getElementsByTagName('p')[0].innerText = data.body;
            document.getElementsByTagName('p')[1].innerText = `ID: ${data.id}, userID: ${data.userId}`;
    })
}


document.getElementById('pobierz-dane').onclick = getData;