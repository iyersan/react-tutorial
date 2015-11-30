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
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
});

ReactDOM.render(
  <CommentBox url= "/api/comments" />,
  document.getElementById('content')
);
