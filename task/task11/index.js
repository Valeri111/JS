$(document).ready(function() {
    $("#accordion").accordion(); });
    
    $(document).ready(function() {
    $("#auto").autocomplete({ minLength: 3, source:["Беларусь","Россия","Китай","США","Казахстан","Канада","Украина"]}); });
    
    $(document).ready(function(){
        $("#el1").button(); });
    
    $(document).ready(function() {
    $("#datepicker").datepicker({
    monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
    firstDay:1,
    dateFormat:"dd.mm.yy", 
    }); });
    
    function check(){
        let year = $("#datepicker").datepicker( 'getDate' );
        isLeap = new Date(year.getFullYear(), 1, 29).getMonth() == 1;
        document.querySelector("#leap").innerHTML="Високосный год: "+isLeap;
    }
