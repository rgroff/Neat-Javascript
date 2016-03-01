<script type="text/javascript">
    $(document).ready(function() {
            $(".pageContent").css("display", "none");
            $(".pageContent").fadeIn(1000);
			$("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".pageContent").fadeOut(500, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
</script>