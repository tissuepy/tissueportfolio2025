import { useEffect } from 'react';
import './Rejection.css';

// External link with dotted underline + ↗ arrow
function EL({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="article-link">
      {children}
    </a>
  );
}

// Dotted underline only, no link
function U({ children }) {
  return <span className="article-underline">{children}</span>;
}

export default function Rejection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="article-page">
      <div className="article-inner">
        <h1 className="article-title">Rejection</h1>
        <p className="article-dateline">
          <span className="article-date">March 2026, written from the comfort of my dorm room</span>
        </p>

        <div className="article-body">
          <p>
            At <EL href="https://www.cornell.edu">Cornell</EL>, everyone eventually finds somewhere
            they fit. Some people find it quickly, while others take a little longer. Coming into
            college, I thought that with so many clubs and opportunities around me, there had to be
            at least one place where I naturally belonged too.
          </p>

          <p>It turned out to be harder than I expected.</p>

          <p>
            One of the first things I noticed at Cornell was how intense club culture could feel.
            Everyone around me seemed incredibly accomplished and involved already, but I still
            believed that somewhere within all the applications and interviews, there would be a
            good fit for me.
          </p>

          <p>I was wrong.</p>

          <p>
            After rejection after rejection, I slowly started questioning my identity as a designer.
            Before college, design was one of the few things I felt truly confident in. I loved
            building things, refining details, and thinking deeply about how people interacted with
            products. But after constantly feeling overlooked, I started wondering whether I was
            even cut out for the field at all.
          </p>

          <p>
            Then the opportunity at <EL href="https://www.joinpogo.com/">Pogo</EL> showed up.
          </p>

          <p>
            Working there as a Product Design Intern helped me reconnect with why I cared about
            design in the first place. It reminded me that growth is not always linear and that
            rejection does not automatically mean you are in the wrong field.
          </p>

          <p>
            Throughout the spring internship, my visual design skills started to feel stronger
            again, and I found myself taking a lot more ownership over my work. It felt good to say
            I was working at a Series B startup, and I was proud of that in its own way, but
            honestly what mattered more to me was the way it brought me back into design. It
            wasn't really about the title or the resume line. It was more about feeling connected
            to the work again, and remembering that I actually enjoyed doing this.
          </p>

          <p>
            At the same time, sophomore summer recruiting slowly started working out too.
            Opportunities that once felt completely out of reach somehow became real options. Offers
            found themselves into my hands, and eventually the question stopped being whether I was
            capable enough to earn an opportunity. Instead, I started thinking about where I
            genuinely saw myself growing and enjoying the work.
          </p>

          <p>
            Did I see myself at <EL href="https://www.walmart.com">Walmart</EL> as a{' '}
            <U>System Engineer Intern</U> re-envisioning the future of AI Digital Twins for Supply
            Chain Operations? Or maybe at{' '}
            <EL href="https://www.mlb.com">Major League Baseball</EL> as a Product Design Intern
            building the future of interactive baseball games in augmented reality? Did I see
            myself back at <EL href="https://www.joinpogo.com/">Pogo</EL> helping design the first
            AI Qualitative Survey Platform? Or was it{' '}
            <EL href="https://www.cisco.com">Cisco</EL> where I saw myself shaping the direction
            of Software-Defined WAN technology as a Technical Product Management Intern?
          </p>

          <p>
            Eventually, I realized I saw myself growing the most at{' '}
            <EL href="https://www.cisco.com">Cisco</EL>, which is where I'll be spending this
            summer in the Bay Area.
          </p>

          <p>
            So to my junior year self reading this someday, whether you are stressed about
            recruiting again or struggling through another difficult semester, remember that things
            eventually worked out because you kept going even when your confidence was low. You
            stayed with it when it mattered most.
          </p>
        </div>
      </div>
    </div>
  );
}
