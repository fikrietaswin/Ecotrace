import { Bell, Check, Trash2 } from 'lucide-react'

const notifications = [
  {
    id: 1,
    title: 'Monthly Carbon Report Available',
    message: 'Your carbon emissions report for last month is now ready to view.',
    time: '2 hours ago',
    type: 'report',
    read: false,
  },
  {
    id: 2,
    title: 'Sustainability Goal Achieved',
    message: 'Congratulations! You\'ve reached your quarterly emission reduction target.',
    time: '1 day ago',
    type: 'achievement',
    read: false,
  },
  {
    id: 3,
    title: 'Project Update',
    message: 'Solar Panel Installation project has been updated with new milestones.',
    time: '2 days ago',
    type: 'project',
    read: true,
  },
  {
    id: 4,
    title: 'New Regulation Alert',
    message: 'New environmental compliance regulations have been published that may affect your operations.',
    time: '3 days ago',
    type: 'alert',
    read: true,
  },
]

const Notifications = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <div className="flex gap-4">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Check className="h-4 w-4 mr-2" />
            Mark All as Read
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 flex items-start space-x-4 ${
              notification.read ? 'opacity-75' : ''
            }`}
          >
            <div className={`rounded-full p-2 ${
              notification.type === 'report' ? 'bg-blue-100 text-blue-600' :
              notification.type === 'achievement' ? 'bg-green-100 text-green-600' :
              notification.type === 'project' ? 'bg-purple-100 text-purple-600' :
              'bg-yellow-100 text-yellow-600'
            }`}>
              <Bell className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
            </div>
            <div className="flex items-center space-x-2">
              {!notification.read && (
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              )}
              <button className="text-gray-400 hover:text-gray-500">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
