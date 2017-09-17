var Projects = {
    manageList: function () {
        this.manageFilter();
    },

    manageFilter: function () {
        $('.gu-Filter-dropdown').on('click', 'a', function (e) {
            var termID = $(this).attr('data-id');
            e.preventDefault();
            console.log(termID)

            Projects.getPostsFromFilter(termID)
        });
    },

    getPostsFromFilter: function (id) {
        $("a.ajax").removeClass("current");
        $("a.ajax").addClass("current"); //adds class current to the category menu item being displayed so you can style it with css
        //$("#loading-animation").show();
        var ajaxurl = 'http://localhost/wgdo/wp-admin/admin-ajax.php'; // TODO: change url
        $.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {"action": "load-filter2", term: id },
            success: function(response) {
                $(".gu-Projects-list").html(response);
                //$("#loading-animation").hide();
                return false;
            },
            error: function(xhr, status, error) {
                var err = JSON.parse(xhr.responseText);
                alert(err.Message);
              }
        });
    }
}

module.exports = Projects;