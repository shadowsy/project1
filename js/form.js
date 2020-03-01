<script>
            function changeStyle() {
            var template = document.getElementById("template");
                var index = template.selectedIndex;
                var templatevalue = template.options[index].value;
                var templatecss = document.getElementById("templatecss");
                templatecss.setAttribute("href", "css/" + templatevalue + ".css");
                document.getElementsByTagName("form")[0].setAttribute("class", templatevalue);

            
        </script>