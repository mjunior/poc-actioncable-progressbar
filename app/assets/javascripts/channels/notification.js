


$(document).ready(function(){
  $('.connect').click(function(){
    batch_name = $('#batch_name').val();
    console.log('Iniciando canal', batch_name);
    initChannel(batch_name);
  });
});


function initChannel(batch_name){
  
  App.notification = App.cable.subscriptions.create({ 
    channel: "NotificationChannel", batch_name: batch_name}, {
    connected: function () {
      console.log('Conectado');
    },
    disconnected: function () { 
      console.log('Desconectado');
    },
    received: function (data) { 
      console.log('Recebendo', data);
      html = `<hr> <b> Total de linhas:</b> ${data.processed_lines} <br />`;
      progress = `<div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${data.percent}%">${data.percent}%</div>`
      $('#status').html(html);
      $('.progress').html(progress);
    },

    push: function (data) {
      return this.perform('push', data);
    }
  })
}