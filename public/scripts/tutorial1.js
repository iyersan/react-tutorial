var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
      <h1> Comment Box </h1>
        <CommentList />
        <CommentForm />
    </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="CommentList">
        Hello, I'm am comment List.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div>
        Hello, I'm a Comment Form.
      </div>
    );
  }
});

