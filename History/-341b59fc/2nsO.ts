import { METHODS } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function feedbackHandler(req: NextApiRequest, res: NextApiResponse){
//   const response = await fetch('https://www.linkedin.com/in/saulocastillo/details/recommendations/?detailScreenTabIndex=0')
//   const data = await response.text()

//   res.status(200).json({data})
// }


async function getLinkedinPost(req: NextApiRequest, res: NextApiResponse, portId, accesToken){
  try{
    const  res = await fetch(`https://www.linkedin.com/in/lukatonny-ferreira/recent-activity/all/`)
    METHODS: 'GET'
  }

}
