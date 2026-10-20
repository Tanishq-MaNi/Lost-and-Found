import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  const rows = [
    ["Name", user?.name],
    ["Email", user?.email],
    ["Registration number", user?.registrationNumber],
    ["Role", user?.role],
  ].filter(([, value]) => value);

  return (
    <div>
      <h1 className="text-2xl font-semibold">My Profile</h1>

      <dl className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/10 bg-[#141b26]">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 p-4 text-sm">
            <dt className="text-slate-400">{label}</dt>
            <dd className="font-medium capitalize text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Profile;