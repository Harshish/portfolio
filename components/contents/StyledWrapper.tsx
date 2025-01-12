import styled from "styled-components";

export default styled.div`
  .container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;
    display: flex;
    margin: auto;
    aspect-ratio: 16/9;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
  }

  .card-container {
    filter: drop-shadow(46px 36px 24px #4090b5)
      drop-shadow(-55px -40px 25px #9e30a9);
    animation: blinkShadowsFilter 8s ease-in infinite;
  }

  .card-content {
    display: grid;
    align-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 1em;
    grid-template-rows: 0.1fr 0.7fr 0.25fr;
    background-color: hsl(296, 59%, 10%);
    width: 30em;
    aspect-ratio: 1;
    -webkit-clip-path: polygon(
      0 0,
      85% 0,
      100% 14%,
      100% 60%,
      92% 65%,
      93% 77%,
      99% 80%,
      99% 90%,
      89% 100%,
      0 100%
    );
    clip-path: polygon(
      0 0,
      85% 0,
      100% 14%,
      100% 60%,
      92% 65%,
      93% 77%,
      99% 80%,
      99% 90%,
      89% 100%,
      0 100%
    );
  }

  .card-content::before {
    content: "";
    position: absolute;
    width: 250%;
    aspect-ratio: 1/1;
    transform-origin: center;
    background: linear-gradient(
        to bottom,
        transparent,
        transparent,
        #66e0ff,
        #66e0ff,
        #e366ff,
        #e366ff,
        transparent,
        transparent
      ),
      linear-gradient(
        to left,
        transparent,
        transparent,
        #66e0ff,
        #66e0ff,
        #e366ff,
        #e366ff,
        transparent,
        transparent
      );
    animation: rotate 5s infinite linear;
  }

  .card-content::after {
    content: "";
    position: absolute;
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(64, 144, 181, 0.6) 1px,
        rgb(0, 0, 0) 3px,
        rgba(64, 144, 181, 0.3019607843) 5px,
        #153544 4px,
        transparent 0.5%
      ),
      repeating-linear-gradient(
        to left,
        hsl(295, 60%, 12%) 100%,
        hsla(295, 60%, 12%, 0.99) 100%
      );
    box-shadow: inset 0px 0px 30px 40px hsl(296, 59%, 10%);
    -webkit-clip-path: polygon(
      0 0,
      85% 0,
      100% 14%,
      100% 60%,
      92% 65%,
      93% 77%,
      99% 80%,
      99% 90%,
      89% 100%,
      0 100%
    );
    clip-path: polygon(
      0 0,
      85% 0,
      100% 14%,
      100% 60%,
      92% 65%,
      93% 77%,
      99% 80%,
      99% 90%,
      89% 100%,
      0 100%
    );
    animation: backglitch 94ms linear infinite;
  }

  .card-title {
    z-index: 80;
    -webkit-clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    background: linear-gradient(
        90deg,
        rgba(255, 254, 250, 0) 0%,
        rgba(102, 224, 255, 0.3) 27%,
        rgba(102, 224, 255, 0.3) 63%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(
        0deg,
        rgba(102, 224, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 10%,
        rgba(255, 255, 255, 0) 96%,
        rgba(102, 224, 255, 0.3) 100%
      );
    width: 98%;
    font-size: 1.2em;
  }

  .title {
    width: 100%;
    height: 100%;
    text-align: right;
    position: relative;
    z-index: 2;
    color: hsl(192, 100%, 88%);
    font-size: 1em;
    transition: all ease-in-out 2s linear;
  }

  .card-body {
    padding-block: 1.5em;
    padding-inline: 1em;
    z-index: 80;
    display: flex;
    gap: 1.5em;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }

  .card-body-skills {
    padding-block: 1.5em;
    padding-inline: 1em;
    z-index: 80;
    display: flex;
    gap: 3em;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }

  .svg-card {
    text-decoration: none;
    color: hsl(192, 100%, 88%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(102, 224, 255, 0.2) 27%,
      rgba(102, 224, 255, 0.2) 63%,
      transparent 100%
    );
    fill: currentColor;
    width: 6em;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  .svg-card .face {
    width: 0.7em;
  }

  .svg-card .twit {
    width: 1em;
  }

  .svg-card .insta {
    width: 1em;
  }

  .svg-card .whats {
    width: 1.1em;
  }

  .svg-card .linkedin {
    width: 6em;
  }

  .svg-card:hover {
    cursor: pointer;
    color: hsl(192, 100%, 100%);
  }

  .card-footer {
    padding-inline: 1em;
  }

  @keyframes backglitch {
    0% {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }

    50% {
      box-shadow: inset 0px -20px 30px 40px hsl(296, 59%, 10.2%);
    }

    to {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(-50%, 20%);
    }

    50% {
      transform: rotate(180deg) translate(40%, 10%);
    }

    to {
      transform: rotate(360deg) translate(-50%, 20%);
    }
  }

  @keyframes blinkShadowsFilter {
    0% {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706))
        drop-shadow(-55px -40px 28px #9e30a9);
    }

    25% {
      filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-55px 40px 24px #9e30a9);
    }

    50% {
      filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));
    }

    75% {
      filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));
    }

    to {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706))
        drop-shadow(-55px -40px 28px #9e30a9);
    }
  } /*# sourceMappingURL=style.css.map */
`;
