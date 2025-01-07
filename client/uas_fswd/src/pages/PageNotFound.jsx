import '../style/PageNotFound.css'
export default function PageNotFound() {
  return (
    <div className="page_not_found_container">
      <div className="message_page_not_found">
        <h1>404</h1>
        <p>Oops! Looks like you&apos;re lost.</p>
      </div>
      <div className="navigation_page_not_found">
        <a href="/" className="back-home-btn">
          Go Back Home
        </a>
      </div>
    </div>
  );
}
