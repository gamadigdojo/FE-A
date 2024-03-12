// ketika HTML berhasil dimuat, fungsi di dalamnya akan di jalankan
$(document).ready(function(){

    // menambahkan event handler untuk tombol search
    $('#searchButton').click(function(){

    // mendapatkan nilai dari input user di input box
    var searchQuery = $("#searchInput").val().toLowerCase();

    // melakukan permintaam GET ke file JSON dan menanggapi responnya
    $.getJSON('book.json', function(data){
        
        // memfilter array buku berdasarkan pencarian user. books didapat dari nama databasenya (bukan nama file JSON nya)
        var filteredBooks = data.books.filter(function(book){

            // mengecek apakah judul buku yang dicari ada di database
            return book.title.toLowerCase().includes(searchQuery)
        });

        // menampilkan hasil pencarian
        displayResults(filteredBooks)

        // menangani kesalah jika permintaan tidak berhasil
    }).fail(function(jqxhr, textStatus, error){

        var err = textStatus + "Database, " + error;
        console.log(err)
        })
    })

    // function untuk nampilin hasil yang dicari
    function displayResults(books){

        var resultHtml = "<h2>Search Result</h2>"

        // memeriksa apakah yg dicari itu ada
        if(books.length === 0){
            resultHtml += "<p>No results found.</p>"
        }else{

            resultHtml += "<ul>"
            books.forEach(function(book){
                resultHtml += "<li><b>Title :</b> " + book.title + "</li>";
                resultHtml += "<li><b>SubTitle :</b> " + (book.subtitle ? book.subtitle : "N/A") + "</li>";
                resultHtml += "<li><b>Author :</b> " + book.author + "</li>";
                resultHtml += "<li><b>Published :</b> " + book.published + "</li>";
                resultHtml += "<li><b>Publisher :</b> " + book.publisher + "</li>";
                resultHtml += "<li><b>Pages :</b> " + book.pages + "</li>";
                resultHtml += "<li><b>Description :</b> " + book.description + "</li>";
                resultHtml += "<li><b>Website :</b> <a href='" + book.website + "'target='_blank'>" + book.website +"</a> </li>";
                resultHtml += "<hr>";
            })
            resultHtml += "</ul>"
        }

        // mengganti elemen HTML dari elemen hasil pencarian
        $('#searchResults').html(resultHtml)
    }

})