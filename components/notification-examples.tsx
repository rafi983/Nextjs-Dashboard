import {
  MessageSquare,
  UserPlus,
  Truck,
  Package,
  ShieldAlert,
  AlertCircle,
  MessageSquareText,
  CheckCircle,
  Mail,
  Upload,
  Disc,
} from "lucide-react"

export function NotificationExamples() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Column 1: Notification Types Examples (Buttons) */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Types Examples</h3>
        <div className="grid gap-3">
          <button className="flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500">
            <MessageSquare className="h-5 w-5" />
            Thanks for Checking out Messenger
          </button>
          <button className="flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            <MessageSquareText className="h-5 w-5" />
            New user feedback received
          </button>
          <button className="flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            <UserPlus className="h-5 w-5" />
            New customer is registered
          </button>
          <button className="flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500">
            <Truck className="h-5 w-5" />
            The order was shipped
          </button>
          <button className="flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <Package className="h-5 w-5" />
            The order was delivered
          </button>
          <button className="flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600">
            <ShieldAlert className="h-5 w-5" />5 Defence alerts
          </button>
        </div>
      </div>

      {/* Column 2: Notification Types Examples (Text with solid icons) */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Types Examples</h3>
        <div className="grid gap-3">
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <AlertCircle className="h-5 w-5 text-red-500" />
            New report has been received
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <MessageSquareText className="h-5 w-5 text-blue-500" />
            New user feedback received
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <CheckCircle className="h-5 w-5 text-green-500" />
            The item was shipped
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <Mail className="h-5 w-5 text-orange-500" />
            The new message from user @nahawaii
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <Upload className="h-5 w-5 text-indigo-500" />
            Your file is ready to upload
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <Disc className="h-5 w-5 text-purple-600" />
            The disc is full
          </div>
        </div>
      </div>

      {/* Column 3: Notification Types Examples (Text with outlined icons) */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Types Examples</h3>
        <div className="grid gap-3">
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-red-300 bg-red-50 text-red-500">
              <AlertCircle className="h-4 w-4" />
            </div>
            New report has been received
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-300 bg-blue-50 text-blue-500">
              <MessageSquareText className="h-4 w-4" />
            </div>
            New user feedback received
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-300 bg-green-50 text-green-500">
              <CheckCircle className="h-4 w-4" />
            </div>
            The item was shipped
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-300 bg-orange-50 text-orange-500">
              <Mail className="h-4 w-4" />
            </div>
            The new message from user @nahawaii
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-indigo-300 bg-indigo-50 text-indigo-500">
              <Upload className="h-4 w-4" />
            </div>
            Your file is ready to upload
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-300 bg-purple-50 text-purple-600">
              <Disc className="h-4 w-4" />
            </div>
            The disc is full
          </div>
        </div>
      </div>
    </div>
  )
}
