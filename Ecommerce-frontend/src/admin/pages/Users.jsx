import { useEffect, useState } from "react";

import api from "../../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  Search,
  Trash2,
  Users as UsersIcon,
  ShieldCheck,
  UserCog,
  Crown,
  Mail,
} from "lucide-react";

const Users = () => {

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  // ================= FETCH USERS =================

  const fetchUsers = async () => {

    try {

      const res = await api.get("/admin/all/user");

      setUsers(res.data.users);

    } catch (error) {

      console.log(error);
    }
  };

  // ================= DELETE USER =================

  const deleteUser = async (id) => {

    try {

      await api.delete(`/admin/user/${id}`);

      fetchUsers();

    } catch (error) {

      console.log(error);
    }
  };

  // ================= UPDATE ROLE =================

  const updateRole = async (id, role) => {

    try {

      await api.put(`/admin/user/${id}/role`, {
        role,
      });

      fetchUsers();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchUsers();

  }, []);

  // ================= FILTER USERS =================

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="flex bg-[#f4f1ea] min-h-screen overflow-hidden">

      {/* ================= SIDEBAR ================= */}

      <Sidebar />

      {/* ================= MAIN ================= */}

      <div className="flex-1 overflow-hidden">

        <Navbar />

        {/* ================= CONTENT ================= */}

        <div className="p-6 lg:p-10">

          {/* ================= HEADER ================= */}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

            <div>

              <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
                User Management
              </p>

              <h1 className="text-5xl font-black mt-3 text-[#111]">
                Manage Users
              </h1>

              <p className="text-black/50 mt-4 text-lg">
                Control customer roles and permissions.
              </p>
            </div>

            {/* SEARCH */}

            <div
              className="
                flex
                items-center
                bg-white
                rounded-2xl
                px-5
                py-4
                w-full
                lg:w-[380px]
                shadow-lg
                border
                border-black/5
              "
            >

              <Search
                size={20}
                className="text-[#9d6b3f]"
              />

              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  px-4
                  outline-none
                  bg-transparent
                "
              />
            </div>
          </div>

          {/* ================= STATS ================= */}

          <div className="grid md:grid-cols-3 gap-8 mb-10">

            {/* TOTAL USERS */}

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                p-8
                shadow-xl
              "
            >

              <UsersIcon
                className="text-[#9d6b3f]"
                size={40}
              />

              <h2 className="text-5xl font-black mt-6">
                {users.length}
              </h2>

              <p className="text-black/50 mt-2">
                Total Users
              </p>
            </div>

            {/* ADMINS */}

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                p-8
                shadow-xl
              "
            >

              <ShieldCheck
                className="text-[#9d6b3f]"
                size={40}
              />

              <h2 className="text-5xl font-black mt-6">
                {
                  users.filter(
                    (u) => u.role === "admin"
                  ).length
                }
              </h2>

              <p className="text-black/50 mt-2">
                Admin Users
              </p>
            </div>

            {/* MANAGERS */}

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                p-8
                shadow-xl
              "
            >

              <UserCog
                className="text-[#9d6b3f]"
                size={40}
              />

              <h2 className="text-5xl font-black mt-6">
                {
                  users.filter(
                    (u) => u.role === "manager"
                  ).length
                }
              </h2>

              <p className="text-black/50 mt-2">
                Managers
              </p>
            </div>
          </div>

          {/* ================= TABLE CONTAINER ================= */}

          <div
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-[40px]
              overflow-hidden
              border
              border-white/40
              shadow-[0_20px_50px_rgba(0,0,0,0.08)]
            "
          >

            {/* HEADER */}

            <div className="p-8 border-b border-black/5">

              <h2 className="text-4xl font-black">
                User Directory
              </h2>

              <p className="text-black/50 mt-3">
                Manage all registered users and roles.
              </p>
            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-black/5">

                    <th className="text-left p-6 text-black/40 font-semibold">
                      User
                    </th>

                    <th className="text-left p-6 text-black/40 font-semibold">
                      Email
                    </th>

                    <th className="text-left p-6 text-black/40 font-semibold">
                      Role
                    </th>

                    <th className="text-left p-6 text-black/40 font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {filteredUsers.map((user) => (

                    <tr
                      key={user._id}
                      className="
                        border-b
                        border-black/5
                        hover:bg-white/50
                        transition
                      "
                    >

                      {/* USER */}

                      <td className="p-6">

                        <div className="flex items-center gap-4">

                          <div
                            className="
                              w-14
                              h-14
                              rounded-2xl
                              bg-[#f4f1ea]
                              flex
                              items-center
                              justify-center
                              text-[#9d6b3f]
                              font-black
                              text-lg
                            "
                          >
                            {user.username?.charAt(0)}
                          </div>

                          <div>

                            <h3 className="font-black text-lg">
                              {user.username}
                            </h3>

                            <p className="text-black/40 text-sm">
                              Premium Customer
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* EMAIL */}

                      <td className="p-6">

                        <div className="flex items-center gap-3">

                          <Mail
                            size={18}
                            className="text-[#9d6b3f]"
                          />

                          <span className="text-black/70">
                            {user.email}
                          </span>
                        </div>
                      </td>

                      {/* ROLE */}

                      <td className="p-6">

                        <div className="relative w-fit">

                          <select
                            value={user.role}
                            onChange={(e) =>
                              updateRole(
                                user._id,
                                e.target.value
                              )
                            }
                            className="
                              appearance-none
                              bg-[#f4f1ea]
                              border
                              border-black/10
                              rounded-2xl
                              px-5
                              py-3
                              pr-10
                              outline-none
                              font-semibold
                            "
                          >

                            <option value="user">
                              User
                            </option>

                            <option value="manager">
                              Manager
                            </option>

                            <option value="admin">
                              Admin
                            </option>
                          </select>

                          <Crown
                            size={18}
                            className="
                              absolute
                              right-3
                              top-1/2
                              -translate-y-1/2
                              text-[#9d6b3f]
                            "
                          />
                        </div>
                      </td>

                      {/* ACTIONS */}

                      <td className="p-6">

                        <button
                          onClick={() =>
                            deleteUser(user._id)
                          }
                          className="
                            bg-red-100
                            text-red-500
                            hover:bg-red-500
                            hover:text-white
                            transition
                            px-6
                            py-3
                            rounded-2xl
                            flex
                            items-center
                            gap-3
                            font-semibold
                          "
                        >

                          <Trash2 size={18} />

                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* EMPTY */}

            {filteredUsers.length === 0 && (

              <div className="p-20 text-center">

                <UsersIcon
                  size={70}
                  className="mx-auto text-[#9d6b3f]"
                />

                <h2 className="text-4xl font-black mt-8">
                  No Users Found
                </h2>

                <p className="text-black/50 mt-4 text-lg">
                  Try another search keyword.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;