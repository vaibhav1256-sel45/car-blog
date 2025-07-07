
import {
  FaCarSide,
  FaBolt,
  FaTachometerAlt,
  FaStopwatch,
  FaCogs,
  FaDollarSign,
  FaCalendarAlt,
  FaGasPump
} from "react-icons/fa";

interface Specifications {
  make: string;
  model: string;
  year: number;
  power: string;
  range: string;
  acceleration: string;
  topSpeed: string;
  drivetrain: string;
  price: string;
}

interface SpecificationCardProps {
  specifications: Specifications;
}

const SpecificationsCard: React.FC<SpecificationCardProps> = ({ specifications }) => {
  const specItems = [
    {
      icon: <FaCarSide className="w-5 h-5" />,
      label: "Make & Model",
      value: `${specifications.make} ${specifications.model}`,
      color: "text-blue-600"
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5" />,
      label: "Year",
      value: specifications.year.toString(),
      color: "text-green-600"
    },
    {
      icon: <FaBolt className="w-5 h-5" />,
      label: "Power",
      value: specifications.power,
      color: "text-yellow-600"
    },
    {
      icon: <FaGasPump className="w-5 h-5" />,
      label: "Range",
      value: specifications.range,
      color: "text-emerald-600"
    },
    {
      icon: <FaStopwatch className="w-5 h-5" />,
      label: "0-60 mph",
      value: specifications.acceleration,
      color: "text-red-600"
    },
    {
      icon: <FaTachometerAlt className="w-5 h-5" />,
      label: "Top Speed",
      value: specifications.topSpeed,
      color: "text-purple-600"
    },
    {
      icon: <FaCogs className="w-5 h-5" />,
      label: "Drivetrain",
      value: specifications.drivetrain,
      color: "text-indigo-600"
    },
    {
      icon: <FaDollarSign className="w-5 h-5" />,
      label: "Starting Price",
      value: specifications.price,
      color: "text-green-600"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Vehicle Specifications</h3>
        <p className="text-gray-300 text-sm">
          {specifications.make} {specifications.model} ({specifications.year})
        </p>
      </div>

      {/* Specifications List */}
      <div className="p-6">
        <div className="space-y-4">
          {specItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className={`${item.color} bg-gray-50 p-2 rounded-lg`}>
                  {item.icon}
                </div>
                <span className="text-gray-600 font-medium">{item.label}</span>
              </div>
              <span className="font-bold text-gray-900 text-right">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Performance Highlight */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <div className="flex items-center space-x-2 mb-2">
            <FaBolt className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-gray-900">Performance Highlight</span>
          </div>
          <p className="text-sm text-gray-700">
            With {specifications.power} and {specifications.acceleration} acceleration, 
            this vehicle delivers exceptional performance in the {specifications.drivetrain} configuration.
          </p>
        </div>

        {/* Price Badge */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <FaDollarSign className="w-4 h-4" />
            <span className="font-bold">Starting at {specifications.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecificationsCard