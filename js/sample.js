$('.next-page').on('click', function() {
    var tag_id = $(this).data('id');
  
    if (isNaN(tag_id)) {
      return false;
    }
    
    
    $.ajax({
        success: function() {
            $(".hoge").html("");
            var htmltext = "";
            htmltext = htmltext + "<h2> これは１ページ目です</h2>"
            htmltext = htmltext + "<form><input type=\"text\" placeholder=\"\">" + tag_id;
            $(".hoge").append(htmltext);
            $(".hoge-link").html("");
            next_page = "<li><button class=\"next-page2\" data-id=\"2\">2</a></button></li>";
            $(".hoge-link").append(next_page);
        }
    });

});

$('.next-page2').on('click', function() {
    var tag_id2 = $(this).data('id');
  
    if (isNaN(tag_id2)) {
      return false;
    }
    
    if (tag_id2 == "2"){
        $.ajax({
            success: function() {
                $(".hoge").html("");
                var htmltext = "";
                htmltext = htmltext + "<h2> これは2ページ目です</h2>"
                htmltext = htmltext + "<form><input type=\"text\" placeholder=\"\">" + tag_id2;
                $(".hoge").append(htmltext);
                $(".hoge-link").html("");
                next_page = "<li><button class=\"next-page\" data-id=\"3\">3</a></button></li>";
                $(".hoge-link").append(next_page);
            }
        });
    }
  });
  