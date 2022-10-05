import Moment from 'react-moment'
import IWidget from '../../interfaces/IWidget'

export const WidgetRenderer = ({
  isSpecialCard,
  title,
  description,
  rating,
  id,
  created,
  updated
 }: IWidget) => {
  return (
    <div className='col-12 p-3'>
      <div className={isSpecialCard ? 'card specialCard' : 'card normalCard'}>
        <div className="card-body">
          <h1 className="card-title">
            {title}
            </h1>
            <p className="card-text">{description}</p>
            <p className="card-text font-italic">Rating: {rating}/10</p>
        </div>
        <div className="card-footer text-muted text-right">
          <span className="float-left">#[id]</span>
          created:&nbsp;
          <Moment fromNow date={{created}} />&nbsp;
          Updated:&nbsp;
          <Moment fromNow date={{updated}} />&nbsp;
        </div>
      </div>
    </div>
  )
}