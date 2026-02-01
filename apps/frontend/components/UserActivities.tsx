import { recentActivityData } from '@/constants'

const activities = recentActivityData || []

const UserActivities = () => {
  return (
    <div>
      {activities?.length ? (
        <div>
        {activities.map((items) => (
        <div 
        key={items.id}
        className="flex items-start space-x-3 p-3 rounded-lg "
        >
            <div className='flex-1 items-center'>
                <div className='flex justify-between'>
                  <div className='pr-4'>
                    <h4 className='font-medium'>{items.action}</h4>
                    <p className='text-xs text-gray-500'>{items.desc}</p>
                  </div>
                    <div className='flex items-center pl-4'>
                        <span className='text-sm'>{items.time}</span>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
      ) : (
        <div className='text-center'>No activities</div>
      )}
    </div>
  )
}

export default UserActivities