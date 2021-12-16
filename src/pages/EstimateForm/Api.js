$('#lead-form').on('submit', function () {
  var formData = formToJson($("#lead-form"));
  console.log('Ready to submit!', formData);
  var url = 'https://api.smartmoving.com/api/leads/from-provider?providerKey=';
  var providerKey = 'YOUR_PROVIDER_KEY';

  // https://smartmoving-prod-api2.azurewebsites.net/api/leads/from-provider/v2?providerKey=2f400089-28bf-46c7-8a17-adfd01096041

  $.ajax({
    url: url + providerKey,
    type: "POST",
    dataType: 'text',
    data: formData,
    contentType: "application/json",
    success: function (result) {
      //TODO: Display a success message or hide the form
      alert('Your information has been received!')
    },
    error: function (xhr, resp, text) {
      console.log(xhr, resp, text);
      //TODO: Display an error or inform the user if it is a duplicate lead.
      alert('There was a problem submitting your information.')
    }
  });

  //Prevent the form from submitting normally! 
  return false;
});

function formToJson(form$) {
  var array = form$.serializeArray();
  var json = {};

  jQuery.each(array, function () {
    json[this.name] = this.value || null;
  });

  return JSON.stringify(json);
}
