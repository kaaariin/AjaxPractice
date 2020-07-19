'use strict'
      $(document).ready(function() {
          //ファイル読み込み
        $.ajax({url: 'data.json',dataType:'json'})
        .done(function(data) {
            data.forEach(function(item,index) {

                if(item.crowded === 'yes') {
                    const idName = '#' + item.id;
                    $(idName).find('.check').addClass('crowded');
                }
            })
        })
        .fail(function() {
            window.alert('読み込みエラー');
        });
      });

      $(document).ready(function() {
        $.ajax({url: 'data.json',dataType:'json'})
        .done(function(data) {
            data.forEach(function(item,index) {
      //クリックされたら空席状況確認
      $('.check').one('click', function() {
          if($(this).hasClass('crowded')) {
              $(this).text('残席わずか').addClass('red');
              if($(this).parent().attr('id') === item.id) {
                  console.log(item.id);
             $(this).parent().append(`<p class="remaining">あと <span>${item.remaining}</span> 席</p>`);
           }
          } else {
              $(this).text('お席あります').addClass('green');
              if($(this).parent().attr('id') === item.id) {
                  console.log(item.id);
             $(this).parent().append(`<p class="remaining">あと <span>${item.remaining}</span> 席</p>`);
           }
          }
return false;
      });
    });
    });
});