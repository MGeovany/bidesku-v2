import React from 'react'
// component for displaying the FAQ documents in a grid format
const documents = [
  {
    title: 'What is the purpose of this website?',
    content:
      'This website is a tool for the public to find and share information about the COVID-19 pandemic.'
  },
  {
    title: 'How do I use this website?',
    content:
      'You can use this website to find and share information about the COVID-19 pandemic.'
  },
  {
    title: 'How do I share information?',
    content:
      'You can share information by clicking the "Share" button in the header.'
  },
  {
    title: 'How do I request a meeting?',
    content:
      'You can request a meeting by clicking the "Request Meeting" button in the header.'
  },
  {
    title: 'How do I download all the documents?',
    content:
      'You can download all the documents by clicking the "Download All" button in the header.'
  },
  {
    title: 'How do I request a meeting?',
    content:
      'You can request a meeting by clicking the "Request Meeting" button in the header.'
  }
]
export const FaqDocuments = () => {
  return (
    <div className='grid py-6'>
      {documents.map((doc, index) => {
        return (
          <div className='card py-5' key={index}>
            <div className='card-content has-background-dark'>
              <p className='title pb-6'>{doc.title}</p>
              <p className='subtitle is-size-6 has-text-light'>{doc.content}</p>
              <p className='subtitle'>BIDESKU</p>
            </div>
            <footer className='card-footer'>
              <p className='card-footer-item'>
                <span>
                  View on
                  <a href='https://www.instagram.com/m_geovany_/'> Instagram</a>
                </span>
              </p>
              <p className='card-footer-item '>
                <span>
                  Share on{' '}
                  <a href='https://www.linkedin.com/in/m-geovany-web-developer/'>
                    Linkedin
                  </a>
                </span>
              </p>
            </footer>
          </div>
        )
      })}
    </div>
  )
}
