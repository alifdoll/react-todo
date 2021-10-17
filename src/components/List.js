import React from "react";

const List = ({ results }) => {
  console.log(results.length);

  if (results.length > 0) {
    const renderedList = results.map((item) => {
      return (
        <div key={item.pageid} className="ui segment">
          <h2>
            <a
              href={`https://en.wikipedia.org?curid=${item.pageid}`}
              className="header"
              target="_blank"
              rel="noreferrer"
            >
              {item.title}
            </a>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
        </div>
      );
    });
    return renderedList;
  } else {
    return (
      <div className="ui segment">
        <h2>
          <a href="#" className="header">
            Not Found
          </a>
        </h2>
        <p>Not Found</p>
      </div>
    );
  }
};

export default List;
