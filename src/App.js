import React from "react";

export default class App extends React.Component {
  render() {
    return (
      /** auto-generated */
      <div style={{ color: "#000" }}>
        <br />
        <table
          width={350}
          bgcolor="#FFFFFF"
          cellPadding={1}
          border={0}
          cellSpacing={0}
          style={{ backgroundColor: "white", textAlign: "center" }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  backgroundColor: "#0066B3",
                  color: "white",
                  font: "16px/1.1 Verdana, Arial, Helvetica, sans-serif",
                }}
              >
                HowManyOfMe.com
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <table
                  width="100%"
                  bgcolor="#FFFFFF"
                  cellPadding={0}
                  border={0}
                  cellSpacing={0}
                  style={{ backgroundColor: "white", textAlign: "center" }}
                >
                  <tbody>
                    <tr>
                      <td width={120} style={{ paddingTop: 2 }}>
                        <a
                          href="http://howmanyofme.com"
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src="http://extimg.howmanyofme.com/extimages/howmany-logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            style={{ border: "1px black" }}
                          />
                        </a>
                      </td>
                      <td>
                        <span
                          style={{
                            font:
                              "16px/1.1 Verdana, Arial, Helvetica, sans-serif",
                            color: "#000",
                          }}
                        >
                          There are
                          <br />
                          <img
                            src="http://extimg.howmanyofme.com/autoimg/j9QZrewLs0KBgWAgQn7cng%2C%2C/count.png"
                            alt={1}
                          />
                          <br />
                          <b>or fewer</b> people with{" "}
                          <span id="hmpu">
                            the name{" "}
                            <a
                              href="http://howmanyofme.com/search/?given=Marcantoine&sur=Jean"
                              style={{
                                color: "#0066B3",
                                textDecoration: "underline",
                                font:
                                  "bold 16px/1.1 Verdana, Arial, Helvetica, sans-serif",
                              }}
                            >
                              Marcantoine Jean
                            </a>
                          </span>{" "}
                          in the U.S.A.
                        </span>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  style={{
                    color: "#0066B3",
                    textDecoration: "underline",
                    font: "bold 16px/1.8 Verdana, Arial, Helvetica, sans-serif",
                  }}
                  href="http://howmanyofme.com"
                >
                  How many have your name?
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}
