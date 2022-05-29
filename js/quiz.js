(function($) {
     var answers = [];
     //Выбор ответа
     $('.quiz_answer_item').click(function(event) {
          $('.quiz_answer_item').each(function(index, el) {
               $(el).removeClass('active');
          });
          $(this).addClass('active');  
     });

     //Кнопки квиза
     $('.quiz_next').click(function(event) {
          //Получаем данные до смены вопроса
          let variant = $('.quiz_block.active').attr('variant');
          let title = $('.quiz_block.active').find('.quiz_title').text();
          let num = $('.quiz_block.active').attr('data-num') - 1;
          let answer;
          if(variant == 1){
               answer = $('.quiz_block.active').find('.quiz_answer_item.active').find('.quiz_answer_title').text();
          }
          if(variant == 2){
               //answer = $('.quiz_block.active').find('.quiz_answer_text').val();
               answer = 'Ширина: ' + $('.quiz_block.active').find('.quiz_answer_sh').val() + ', Высота: ' + $('.quiz_block.active').find('.quiz_answer_v').val() + ', Глубина: ' + $('.quiz_block.active').find('.quiz_answer_g').val();
          }
          if(variant == 3){
               var file = $('.quiz_block.active').find('.quiz_file')[0].files;
               if (file){
                    $('#quiz_file')[0].files = file;
                    answer = "Файл прикреплен";
               }
               

          }
         
          //меняем вопрос
          $('.quiz_block.active').hide().removeClass('active').next().show().addClass('active');
          $('.quiz_step_item.active').next().addClass('active');

          //записываем данные
          if(answers.length == 0){
               answers.splice(num, 0, title + ' - '+ answer);
          } else if(answers[num] = 'undefined'){
               answers.splice(num, 1, title + ' - '+ answer);
          } else{
               answers.splice(num, 0, title + ' - '+ answer);
          }
          
          $('#quiz_answer').val('');
          for (let i = 0; i < answers.length; i++ ) {
              jQuery('#quiz_answer').val(jQuery('#quiz_answer').val() + answers[i] + '\n');
          }
     });

     $('.quiz_prev').click(function(event) {
          $('.quiz_block.active').hide().removeClass('active').prev().show().addClass('active');
          $('.quiz_step_item.active').last().removeClass('active');
     });

     $('.quiz_send_btn').click(function(event) {
          $('.quiz_send').trigger('click');
     });

     document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '106' == event.detail.contactFormId ) {
               ym(88696281,'reachGoal','quiz_send');
               return true;
        }
    }, false );
})( jQuery );