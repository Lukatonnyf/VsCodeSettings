'use client'

import JsxAboutMe from '../components/jsxAboutMe'

export default function VsAboutMe() {
  const lineNumbers = []
  for (let i = 1; i <= 25; i++) {
    lineNumbers.push(
      <li className="flex justify-end text-numbers-vscode" key={i}>
        {i}
      </li>
    )
  }

  return (
    <div className="w-full h-full ">
      <div >
        <div className="flex flex-row p-5 ">
          <span>
            <ul className="flex flex-col pr-2 gap-0.5 ">{lineNumbers}</ul>
          </span>

          {/* Cód */}
          <div className="flex flex-col  w-full">
            <JsxAboutMe />

            {/* Return/Main  */}
            <div>
              <h1 className="flex flex-col mt-4 pl-1  gap-0.5 text-danger text-sm">
                return &#40;
                <p className="pl-2 text-tags">
                  &#60;main
                  <span className="text-purple"> className</span>
                =&quot;hero-container&quot;&#62;
                </p>
                {/* name */}
                <p className="pl-4 text-tags">
                  &#60;h1&#62;
                  <span className="text-blue">
                    &#123;
                    <strong className="text-gray-300">aboutMe</strong>
                    .name&#125;
                  </span>
                  &#60; &#47;h1&#62;
                </p>
                {/* função */}
                <p className="pl-5 text-tags">
                  &#60;p&#62;
                  <span className="text-blue">
                    &#123;
                    <strong className="text-gray-300">aboutMe</strong>
                    .função&#125;
                  </span>
                  
                </p>
                {/* age */}
                <p className="pl-5 text-tags">
                  &#60;p&#62;
                  <span className="text-blue">
                    &#123;
                    <strong className="text-gray-300">aboutMe</strong>
                    .função&#125;
                  </span>
                  &#60;&#47;p&#62;
                </p>
                <p className="flex pl-2 text-tags">&#60;&#47;main&#62;</p>
                <span>
                  &#41;&#59;
                  <strong className="text-tags">&#125;</strong>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
