import React from 'react'
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$7,500/mo",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$8,200/mo",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd37QFyv4GzzqxSw5Otx1AI_OUJPOVoiaW3zZv2RMMBg&s=10",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$10,500/mo",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$7,900/mo",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$9,800/mo",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91gke83AgsjipPMZmrsDP0-K7oWgm4ZCkxZNh9Exo3Q&s=10",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$11,200/mo",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXBtwAbDZk07RD6mNQGNC4b8XZO88BLnlbHqM8sHtYg&s",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$12,000/mo",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwgbLPGIauG3Gjph_EERza0f_cxIB0K3hZCw9AKGeOA&s=10",
    companyName: "Adobe",
    datePosted: "1 day ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$5,800/mo",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5gWTrDXyoPqd3SwL79y9injzePIlkWqKFnYvTUz5SQ&s=10",
    companyName: "Oracle",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$8,700/mo",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeV2ddvTTfAMLq8dcxcyLob8yc5_l67jI8NEwWG3HBew&s=10",
    companyName: "IBM",
    datePosted: "5 days ago",
    post: "DevOps Engineer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$9,300/mo",
    location: "Pune, India",
  },
];

const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elems){
        return <Card brandLogo={elems.brandLogo} company={elems.companyName} datePosted={elems.datePosted} post={elems.post} tag1={elems.tag1}
        tag2={elems.tag2} pay={elems.pay} location={elems.location}/>
      })}
    </div>
  )
}

export default App
