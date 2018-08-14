$(document).ready(function(){
    $('.devour').on('click', function(){
        let id = $(this).data('id');
        $.ajax({
            url: `/api/burgers/${id}`,
            type: 'PUT'
        }).then(function(){
            location.reload();
        });
    });
    $('#submit').on('click', function(){
        event.preventDefault();

        let newBurger = { burger_name: `${$('#burgerInput').val().trim()}`};
        console.log(newBurger);

        $.ajax({
            url: '/api/burgers',
            type: 'POST',
            data: newBurger,
        }).then(function(){
            location.reload();
        });
    });
});