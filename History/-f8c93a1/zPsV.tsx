'use client'

import JsxAboutMe from '../components/jsxAboutMe'

export default function VsAboutMe() {
  const lineNumbers = []
  for (let i = 1; i <= 30; i++) {
    lineNumbers.push(
      <li className="flex  justify-end text-numbers-vscode" key={i}>
        {i}
      </li>
    )
  }

  return (
    <div className="w-full h-full ">
      <div className="pl-1">
        <div className="flex flex-row p-5 ">
          <span>
            <ul className="flex flex-col pr-2  ">{lineNumbers}</ul>
          </span>

          {/* Cód */}
          <div className="flex flex-col gap-2 w-full">
            <JsxAboutMe />

            {/* Return/Main  */}
            <div>
              <h1 className="flex flex-col mt-4 pl-1 text-danger ">
                return &#40;
                <p className="pl-2 text-tags">
                  &#60;main
                  <span className="text-purple"> className</span>
                  ="hero-container"&#62;
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
                {/* role */}
                <p className="pl-5 text-tags">
                  &#60;p&#62;&#123;role.name&#125;&#60;&#47;p&#62;
                </p>
                {/* age */}
                <p className="pl-5 text-tags">
                  &#60;p&#62;&#123;age.name&#125;&#60;&#47;p&#62;
                </p>
                <p className="pl-2 text-tags">&#60;&#47;main&#62;</p>
                &#41;&#59;
              </h1>
              <strong className="text-tags">&#125;</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
