var CommentBox = React.createClass({
    render: function() {
    return (
       <div class="form-group col-xs-8 col-xs-offset-2" >

    <h1>Create a new user! </h1>
    <p> (it's fun, belive me) </p>


    <form method="POST">

      <!-- ID -->
      <div >
        <label for="id">Your Id</label>
        <input type="text" name="id"  placeholder="your id" class="form-control">
      </div>

      <!-- First name -->
      <div>
        <label for="fName">First Name</label>
        <input type="text" name="fName" placeholder="first name" class="form-control">
      </div>

      <!-- Last name -->
      <div >
        <label for="lName">Last Name</label>
        <input type="text" name="lName" placeholder="last name" class="form-control"
      </div>

      <!-- Start data -->
      <div>
        <label for="start">Start Date</label>
        <input type="text" name="start"   placeholder="start date" class="form-control">
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-success">Submit </button>

    </form>
  </div>

   <div class="form2 form-group col-xs-10 col-xs-offset-2" >

    <form method="POST">  


      <button type="submit" onclick="window.location.href = 'http://localhost:2000/people'" class="btn btn-success">Click to see people in the database! </button>


    </form>

  </div>
    );
  }
  });

ReactDOM.render(
    <CommentBox />,

);