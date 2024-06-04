import TestimonialPros from '../interfaces/TestimonialPros'

const Testimonial = ({name,testimonial,image}:TestimonialPros) => {
  return (
    <div className='testimonial'>
        <img className='testimonial_image' src={image} alt={`${name}'s image`} />
        <div className='testimonial_content'>
            <p className='testimonial_text'>{testimonial}</p>
            <h4 className='testimonial_name'>{name}</h4>

        </div>
      
    </div>
  )
}

export default Testimonial
