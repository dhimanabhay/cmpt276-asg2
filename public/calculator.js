var rectangle_number = 0;
function add_rectangle()
{
    ++rectangle_number;
    var html_template =   
                            '<tr id="rectangle_number">\
                                <td>' +rectangle_number+ '</td>\
                                <td>Bob</td>\
                                <td>red</td>\
                                <td><button class="table_btn" onclick="delete_specific_rectangle('+rectangle_number+')">Delete</button></td>\
                            </tr>';
                            
    var newRow = document.getElementById('table_body').insertRow();
    newRow.id = "id_" + rectangle_number;
    newRow.innerHTML = html_template;
    //call database, add 1 rectangle by default
}

add_rectangle();
add_rectangle();

function delete_specific_rectangle(number)
{
    var id = "id_"+number;
    document.getElementById(id).remove();
    console.log(number);
    //call database
}

function delete_rectangle()
{
    window.PopStateEvent();
}

console.log(rectangle_number);