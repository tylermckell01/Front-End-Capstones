export default function About() {
  return (
    <div className="about-page-container">
      <div className="page-title ">About This Project page</div>
      <div className="process info-wrapper">
        <h3>This was my process...</h3>
        <p>
          My process for this project was very long, but I learned SO MUCH along
          the way. I started by coming up with a basic wireframe that shows how
          each page will connect. From that wireframe I decided which pieces
          will need to be reusable so I would know what needed to be in it's own
          component. <br /> <br />
          After that basic wireframe, I started to set up my actual folder/file
          structure in VSCode. I made folders for things such as pages, routing,
          styles, custom-componenets, etc... then I started to fill them with
          the actual files that I had planned to build before I actually built
          them. <br /> <br />
          Pretty much from that point on, I would build a component, test out
          the component, troubleshoot if (when) there are errors. Then after
          spending roughly 5-6 hours a day for about a week, repeating this
          process, I built out all my features to where they work well enough
          for this first "rough draft" of my app.
        </p>
      </div>
      <div className="struggles info-wrapper">
        <h3>These were my main struggles </h3>
        <ul>
          <li>
            Understanding/implementing the LOGIC that moves info from page to
            page ie. props{" "}
          </li>
          <li>
            Making my code generally more dynamic since much of what we had done
            thus far is more static
          </li>
          <li>
            Honestly it was difficult for me to go back and forth on a certain
            pieces. I would build out a component, get it working the way i
            wanted to, then when I would reuse the component somewhere else, it
            was difficult for me to understand how to alter the component to
            work for both functionalities
          </li>
        </ul>
      </div>
      <div className="favorite-language info-wrapper">
        <h3>This was my favorite language</h3>
        <p>
          My favorite language is SCSS because I really enjoy the styling aspect
          of FE coding. I like styling because you get to see on the screen
          directly what youre doing almost immeditaly after you alter just one
          small thing.
        </p>
      </div>
    </div>
  );
}
