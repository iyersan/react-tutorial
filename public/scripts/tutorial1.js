var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
      <h1> Comments </h1>
        <CommentList data={this.props.data} />
        <CommentForm />
    </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="CommentList">
        <Comment author="John Doe">This is a comment</Comment>
        <Comment author="Jane Smith">This is the next comment</Comment>
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

// By surrounding a JavaScript expression in braces inside JSX (as either an attribute or child), you can drop text or React components into the tree.

var Comment = React.createClass({
  render: function(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var data = [
  {id: 1, author: "John Doe", text: "This is one comment"},
  {id: 2, author: "Jane Smith", text: "This is another comment"}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
