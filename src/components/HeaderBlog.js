function BlogHeader({clubname}){
    return(
        <div className="text-white flex justify-around w-full pt-2">
            <h1 className="text-2xl text-[#0A66C2] tracking-wider"> {clubname} </h1>

            <div className="flex justify-center mb-4 space-x-10">
          <a href="https://www.facebook.com" className="mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com" className="mx-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com" className="mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href='https://www.github.com' className='mx-2'>
            <i className='fab fa-github'></i>
            </a>
        </div>
        </div>
    )
}
export default BlogHeader;