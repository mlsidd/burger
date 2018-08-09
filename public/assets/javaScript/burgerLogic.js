$(function() {
    $("#devour").on("submit", function(event) {
        var id = $(this).data("id");

        var newlyDevoured = {
            devoured: "devoured"
        };

        // Send PUT request to make this change
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newlyDevoured
        }).then(
            function() {
                console.log("burger was eaten");
                // reload page for updated data from db
                location.reload();
            }
        );
    }); // end of devour button event

    $("#submit").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#burger").val().trim()
        };

        // Send POST request to add burger to db
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added another burger");
                // reload page to show updated table
                location.reload();
            }
        );
    });
});