$(document).ready(function(){

  $('#gen_btn').on('click', function(){

    var _biz = $('#biz_field').val();
    var _attn = $('#attn_field').val();

    var _url = '/propuesta?biz='+_biz+'&attn='+_attn;

    console.log('Navigating to '+_url);

    window.location.assign(_url);

    return false;

  });
});
