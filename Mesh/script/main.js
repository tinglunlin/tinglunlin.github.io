$(function() {
  
  $('#app').each(function () {
    
    let SelectData = {
      modelType: '',
      imgSrc: '',
    }
    
    // 選擇 Router 
    $('.select .router li').on('click touchstart',function(){
      
      let pos_1 = $('.device_area .device_pos1').attr('data'),
          pos_2 = $('.device_area .device_pos2').attr('data'),
          pos_3 = $('.device_area .device_pos3').attr('data'),
          pos_4 = $('.device_area .device_pos4').attr('data'),
          pos_5 = $('.device_area .device_pos5').attr('data'),
          pos_6 = $('.device_area .device_pos6').attr('data')

      // 如果 pos 有 DIR 就會顯示視窗提示
      if( pos_1 == 'DIR' || pos_2 == 'DIR' || pos_3 == 'DIR' || pos_4 == 'DIR' || pos_5 == 'DIR' || pos_6 == 'DIR' ){
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

        return SelectData = SelectDataCookie
      }

    })

    // 選擇 Extender
    $('.select .extender li').on('click touchstart',function(){
      let thisExtenderType = $(this).attr('modelType')
      let thisExtenderSrc = $(this).children('img').attr('src')
      $('.select li').removeClass('active')
      $(this).addClass('active')
      $('.device_box').addClass('active')

      SelectDataCookie = {
        modelType: thisExtenderType,
        imgSrc: thisExtenderSrc,
      }

      return SelectData = SelectDataCookie
    })

    // pos 裝置放置的位置
    $('.device_area div').on('click touchstart',function(){
      // console.log(SelectData.modelType)
      // console.log(SelectData.imgSrc)

      // 點擊 DIR ，可以刪除
      if( $(this).attr('data') == 'DIR'){
        $('.select .router li').removeClass('Disabled')
        SelectData.modelType = ''
        SelectData.imgSrc = ''
        $(this).attr('data', SelectData.modelType)
        $(this).children('img').attr('src', SelectData.imgSrc)
      }
      // 點擊 DRA ，可以刪除
      else if( $(this).attr('data') == 'DRA'){
        SelectData.modelType = ''
        SelectData.imgSrc = ''
        $(this).attr('data', SelectData.modelType)
        $(this).children('img').attr('src', SelectData.imgSrc)
      }
      // 如果data裡面是空值條訊息視窗 
      else if( SelectData.modelType == '' && SelectData.imgSrc == ''){
        alert('請先選擇 Router 或 Extender')
      } 
      // 如果data類別是 DIR 傳值後，將 DIR反灰
      else if( SelectData.modelType == 'DIR' ){
        $('.select .router li').addClass('Disabled')
        $(this).attr('data', SelectData.modelType)
        $(this).children('img').attr('src', SelectData.imgSrc)
        SelectData.modelType = ''
        SelectData.imgSrc = ''
        $('.select li').removeClass('active')
        $('.device_box').removeClass('active')
      } 
      // 如果都不是，就正常傳值
      else {
        $(this).attr('data', SelectData.modelType)
        $(this).children('img').attr('src', SelectData.imgSrc)
        SelectData.modelType = ''
        SelectData.imgSrc = ''
        $('.select li').removeClass('active')
        $('.device_box').removeClass('active')
       
      }

    })

    


      

      
      

  });
  
  
});
  
