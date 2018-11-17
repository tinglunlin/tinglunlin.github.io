$(function() {

  $('#app').each(function () {
    
    let SelectData = {
      modelType: '',
      imgSrc: '',
    }
    
    // 選擇 Router 
    $('.select .router li').click(function(){
      
      // 取得所有 device_box 的 data 值, 回傳陣列, posData[0] 就是 .device_pos1 的 data
      let posData = $(".device_box").map(function(){
        return $(this).attr("data");
      }).get();

      // 如果 pos 有 DIR 就會顯示視窗提示
      if( posData.indexOf("DIR") !== -1 ){
        alert('您只能安裝一台 Router')
      }
      else {
        let thisRouterType = $(this).attr('modelType')
        let thisRouterSrc = $(this).children('img').attr('src')
        
        $('.select li').removeClass('active')
        $(this).addClass('active')
        $('.device_box').addClass('active')
        
        SelectDataCookie = {
          modelType: thisRouterType,
          imgSrc: thisRouterSrc,
        }
        SelectData = SelectDataCookie;
        // return SelectData = SelectDataCookie
      }
    })

    // 選擇 Extender
    $('.select .extender li').click(function(){
      let thisExtenderType = $(this).attr('modelType')
      let thisExtenderSrc = $(this).children('img').attr('src')
      $('.select li').removeClass('active')
      $(this).addClass('active')
      $('.device_box').addClass('active')

      SelectDataCookie = {
        modelType: thisExtenderType,
        imgSrc: thisExtenderSrc,
      }
      SelectData = SelectDataCookie;
      // return SelectData = SelectDataCookie
    })

    // pos 裝置放置的位置
    $('.device_area div img').click(function(){

      let $POS = $(this).parent('.device_box')
      let $close = $(this).next('.close')

      
      if( SelectData.modelType == '' && SelectData.imgSrc == '' && $POS.attr('data') == '' ){
        // 如果data裡面是空值條訊息視窗 
        alert('請先選擇 Router 或 Extender')
      } 
      else if( SelectData.modelType == 'DIR' ) {
        // 如果data類別是 DIR 傳值後，將 DIR反灰
        $('.select .router li').addClass('Disabled')
        $close.addClass('on')
        $POS.attr('data', SelectData.modelType)
        $(this).attr('src', SelectData.imgSrc)
        dataRest()
      } 
      else if( SelectData.modelType == 'DRA' && $POS.attr('data') == 'DIR') {
        
        $('.select .router li').removeClass('Disabled')
        $close.addClass('on')
        $POS.attr('data', SelectData.modelType)
        $(this).attr('src', SelectData.imgSrc)
        dataRest()
      } 
      else if( SelectData.modelType == 'DRA' ) {
        $close.addClass('on')
        $POS.attr('data', SelectData.modelType)
        $(this).attr('src', SelectData.imgSrc)
        dataRest()
      } else {}
      

      // 無論任何情況, 都直接做以下這些事情
      // (設定點擊的格子, 清除active對象, 清除SelectData)
      $('.select li').removeClass('active')
      $('.device_box').removeClass('active')
      
    })

    $('.device_area div .close').click(function(){
      let $POS = $(this).parent('.device_box')

      // 點擊 DIR ，可以刪除
      if( $POS.attr('data') == 'DIR'){
        $('.select .router li').removeClass('Disabled')
      } else {}

      $(this).prev('img').attr('src', 'img/space.png')
      $(this).parent('.device_box').attr('data', '')
      $(this).removeClass('on')
      dataRest()
    })

    function dataRest(){
      SelectData.modelType = ''
      SelectData.imgSrc = ''
    }

  });
  
});
  
