import Image1 from "../../../components/Assets/Rectangle 4859.png";
import Image2 from "../../../components/Assets/Rectangle 4861.png";
import Image3 from "../../../components/Assets/Rectangle 4863.png";
import Image4 from "../../../components/Assets/Rectangle 4865.png";
import Image5 from "../../../components/Assets/Rectangle 4867.png";

const QuickAccess = () => {
  return (
    <>
      <h2 className="quic-access text-xl mb-5">
        <b>Quick Access</b>
      </h2>
      <div className="flex justify-center items-center overflow-hidden gap-4">
        <div className="Cards shadow-none" style={{ width: "19%" }}>
          <div
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: "1px solid #B3B3B3" }}
          >
            <img
              className="w-full h-25 object-cover"
              src={Image1}
              alt="Image"
              style={{ width: "100%" }}
            />
            <div className="p-1" style={{ height: "43px" }}>
              <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
              <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                Ceated Today
              </p>
            </div>
          </div>
        </div>

        <div className="Cards" style={{ width: "19%" }}>
          <div
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: "1px solid #aba4a4" }}
          >
            <img
              className="w-full h-25 object-cover"
              src={Image2}
              alt="Image"
              style={{ width: "100%" }}
            />
            <div className="p-1" style={{ height: "43px" }}>
              <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
              <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                Ceated Today
              </p>
            </div>
          </div>
        </div>

        <div className="Cards" style={{ width: "19%" }}>
          <div
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: "1px solid #aba4a4" }}
          >
            <img
              className="w-full h-25 object-cover"
              src={Image3}
              alt="Image"
              style={{ width: "100%" }}
            />
            <div className="p-1" style={{ height: "43px" }}>
              <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
              <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                Ceated Today
              </p>
            </div>
          </div>
        </div>

        <div className="Cards" style={{ width: "19%" }}>
          <div
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: "1px solid #aba4a4" }}
          >
            <img
              className="w-full h-25 object-cover"
              src={Image4}
              alt="Image"
              style={{ width: "100%" }}
            />
            <div className="p-1" style={{ height: "43px" }}>
              <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
              <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                Ceated Today
              </p>
            </div>
          </div>
        </div>

        <div className="Cards" style={{ width: "19%" }}>
          <div
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: "1px solid #aba4a4" }}
          >
            <img
              className="w-full h-25 object-cover"
              src={Image5}
              alt="Image"
              style={{ width: "100%" }}
            />
            <div className="p-1" style={{ height: "43px" }}>
              <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
              <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                Ceated Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAccess;
