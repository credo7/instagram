import { TiCompass } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import {
  AiFillHome,
  // AiOutlineMenu,
  // AiOutlinePlusCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { HiOutlinePaperAirplane, HiOutlineUserGroup } from "react-icons/Hi";
import { BsPatchPlus } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import { useAuth } from "../Context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";

const Header = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const { currentUser } = useAuth();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const filePickerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [selectedFile, setSelectedFile] = useState(null as any);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [usernames, setUsernames] = useState([] as string[]);
  const searchRef = useRef() as any;

  const addImageToProfile = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target?.result as any);
      }
    };
  };

  const uploadPicture = async () => {
    if (loading) return;

    setLoading(true);
    const imageRef = ref(storage, `${currentUser.uid}/profile.png`);
    imageRef.bucket.replace("appspot.com", "firebaseapp.com");
    await uploadString(imageRef, selectedFile, "data_url")
      .then(async (snapshot) => {
        const downloadImageURL = await getDownloadURL(imageRef);
        updateProfile(currentUser, { image: downloadImageURL } as any);
      })
      .catch((e) => console.log(e));
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const goToMainPage = () => {
    router.push("/");
  };

  const goToUserPage = (username: string) => {
    searchRef.current.value = "";
    setUsernames([]);
    router.push("/" + username);
  };

  const search = async (str: string) => {
    const end = str.replace(/.$/, (c) =>
      String.fromCharCode(c.charCodeAt(0) + 1)
    );
    const querySnapshot = await getDocs(
      query(
        collection(db, "users"),
        where("username", ">=", str),
        where("username", "<", end)
      )
    );

    const res = [] as string[];

    await querySnapshot?.docs.forEach((doc) => {
      res.push(doc?.data()?.username);
    });

    setUsernames(res);
  };

  return (
    <>
      <div className="w-full min-h-[60px] border-none flex justify-center items-center">
        <div className="w-full lg:w-[1024px] md:w-[768px] sm:w-[640px] sm:rounded-[32px] sm:rounded-t-none backdrop-blur-3xl bg-[rgba(255,255,255,0.9)] shadow-sm fixed z-50">
          <div
            className="min-h-[60px] flex flex-row px-4 justify-between 
      items-center py-[10px] max-w-[970px] lg:mx-auto"
          >
            {/* <div className="cursor-pointer lg:hidden mr-4">
          <IoLogoInstagram className="h-10 w-10" />
        </div> */}
            <div className="relative inline-grid flex-shrink-0">
              <img
                onClick={goToMainPage}
                className="h-[29px] w-auto relative top-1 cursor-pointer"
                src="instTextLogo.svg"
              />
            </div>
            {/* Middle: search Input */}
            <div className="hidden sm:block sm:relative max-w-xs">
              <div className="absolute inset-y-0 pl-3 flex items-center">
                <BiSearch className="w-5 h-5 text-gray-300" />
              </div>

              <input
                ref={searchRef}
                onKeyUp={(e) => search(e.currentTarget.value)} // TODO debounce
                className="block w-full pl-10 bg-gray-50 placeholder-gray-300 sm:text-sm border-none rounded-[32px] focus:ring-0"
                type="text"
                placeholder="Search"
              />
              {usernames.length > 0 ? (
                <div className="absolute top-[32px] w-full max-h-[300px] bg-gray-50 overflow-y-scroll rounded-sm shadow-lg">
                  <ul className="px-4 py-2">
                    {usernames.map((username: string) => {
                      return (
                        <li
                          className="w-full h-full cursor-pointer"
                          onClick={() => goToUserPage(username)}
                        >
                          {username}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* End : Buttons */}
            <div className="flex flex-row items-center justify-end space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 relative">
              <AiFillHome onClick={goToMainPage} className="navbtn" />
              {/* <AiOutlineMenu className="h-6 w-6 sm:hidden cursor-pointer text-gray-700" /> */}
              <div className="relative">
                <HiOutlinePaperAirplane className="navbtn rotate-45 relative bottom-1 left-1" />
                <div className="hidden md:flex absolute -top-1.5 left-[16px] text-xs w-4 h-4 bg-red-500 rounded-full items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <BsPatchPlus
                onClick={() => setOpen(true)}
                className="navbtn w-6 h-6"
              />
              {/* <TiCompass className="navbtn h-8 w-8 rotate-180" /> */}
              <AiOutlineHeart className="navbtn w-8 h-8" />
              <div
                className="cursor-pointer"
                onClick={() => setOpenProfileModal(!openProfileModal)}
              >
                {" "}
                {/* TODO Tooltip */}
                {currentUser.photoURL ? (
                  <img
                    className="h-9 w-9 rounded-full object-cover"
                    src={currentUser.photoURL}
                  />
                ) : (
                  <FaRegUserCircle className="h-7 w-7" />
                )}
              </div>
              {openProfileModal ? (
                <div className="absolute top-[76px] right-0 bg-white border-[1px] border-gray-200 rounded-sm flex flex-col items-center justify-center min-h-[280px] min-w-[210px]">
                  {/* <p className="mt-4 mb-6">username</p> */}
                  {currentUser.photoURL ? (
                    <img
                      onClick={() => filePickerRef.current.click()}
                      className="h-28 w-28 object-cover rounded-full cursor-pointer mt-[12px]"
                      src={currentUser.photoURL}
                    />
                  ) : (
                    <FaRegUserCircle
                      onClick={() => filePickerRef.current.click()}
                      className="h-28 w-28 cursor-pointer"
                    />
                  )}
                  <input
                    ref={filePickerRef}
                    type="file"
                    className="absolute"
                    hidden
                    onChange={addImageToProfile}
                  />
                  {selectedFile ? (
                    <button
                      className="mt-5 mb-1 bg-blue-400 h-[28px] w-[112px] text-white text-lg rounded-sm font-light"
                      onClick={uploadPicture}
                    >
                      {loading ? "Loading..." : "Upload"}
                    </button>
                  ) : (
                    <button
                      className="text-sm text-gray-400 mt-5 mb-1 h-[28px] w-[112px]"
                      onClick={() => filePickerRef.current.click()}
                    >
                      Click to change
                    </button>
                  )}
                  {/* <p>Full name</p> */}
                  {/* <p>Bio</p> */}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
