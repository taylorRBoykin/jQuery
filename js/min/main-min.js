$(document).ready(function(){$("button").click(function(){var l=$("input[name=fName]").val();$("h1").html("Hello, "+l+"!"),$('input[name="fName"]').val(""),$("ul").append("<li>"+l+"</li>")}),$(document).on("click","ul li",function(){$(this).remove()}),$(".clearAll").click(function(){$("ul").empty()})});