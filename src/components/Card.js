import React, { useState } from "react";
import classNames from "classnames";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

// import "./card.css"

const Card = ({
  title,
  subtitle,
  Time_Desc,
  Short_Description,
  Long_Description,
  Image,
  Link,
  tags,
  showLink = false,
  linkLabel = "Learn More"
}) => {
  let [active, setActive] = useState(false);
  return (
    <button
      className={classNames("card", "card", { active: active })}
      onClick={() => setActive(!active)}
      aria-label="Expand Item"
    >
      <div className="card__titleRow">
        <Img
          className="card__Img"
          fluid={Image.localFiles[0].childImageSharp.fluid}
        />
        <div className="card__titlebox">
          <h3 className="card__title">{title}</h3>
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
          <p className="card__shortDesc">{Short_Description}</p>
        </div>
        <div className="flex-spacer" />
        <p className="card__timeDesc">{Time_Desc}</p>
      </div>

      {active && (
        <>
          {tags.length > 0 && (
            <div className="card__tagList">
              {tags.map((t, i) => (
                <span key={i} className="card__tag">
                  {t}
                </span>
              ))}
            </div>
          )}
          <ReactMarkdown className="card__longDesc" source={Long_Description} />
          {showLink && (
            <a className="card__link" href={Link}>
              {linkLabel}
            </a>
          )}
        </>
      )}
    </button>
  );
};

export default Card;
