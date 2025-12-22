import { LuClock2, LuDollarSign } from 'react-icons/lu';
import { FaUserLarge } from 'react-icons/fa6';
import Modal from '../../ui/Modal';
import { useState } from 'react';
import ChangeProposalStatus from './ChangeProposalStatus';

function ProposalCard({
  id,
  status,
  description,
  price,
  duration,
  client,
  canChangeStatus,
}) {
  const statusStyle = [
    {
      label: 'Decline',
      className: 'badge-danger',
    },
    {
      label: 'Pending',
      className: 'badge-secondary',
    },
    {
      label: 'Accept',
      className: 'badge-success',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col ">
      <article className="text-title flex flex-col bg-component orange-container-proposal !hover:scale-[1] mt-12">
        <div className="h-3">
          <div className="w-full h-2 rounded-t-4xl bg-primary-500"></div>
        </div>
        <div className="flex flex-col justify-between gap-y-4 rounded-t-none p-5">
          <div className="project-card__header gap-4 w-full flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <div className="bg-primary-500 text-color p-3 rounded-full">
                <FaUserLarge className="size-4" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-subtitle">Posted by</p>
                <p className="text-sm font-bold">{client}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4">
              <span className={`badge-state ${statusStyle[status].className}`}>
                {statusStyle[status].label}
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-200"></div>

          <div className="flex flex-col mt-6 justify-center gap-y-6">
            <p className="text-subtitle font-medium line-clamp-2 h-10 text-sm">
              {description}
            </p>

            <div className="w-full h-px bg-zinc-200"></div>

            <div className="flex gap-x-4 flex-wrap gap-y-3">
              <div className="flex-col flex-1 gap-y-2 flex gap-x-2 bg-linear-to-br from-emerald-50 via-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-emerald-100 shadow-sm hover:shadow-md smooth-transition">
                <div className="flex items-center gap-x-2">
                  <span className="p-2 rounded-lg bg-green-200">
                    <LuDollarSign className="size-4 text-green-700" />
                  </span>

                  <span className="uppercase text-sm font-bold text-green-700">
                    price
                  </span>
                </div>
                <p className="text-xl font-bold text-green-900">{`$ ${price}`}</p>
              </div>

              <div className="flex-col flex-1 gap-y-2 flex gap-x-2 bg-linear-to-br from-blue-50 via-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-100 shadow-sm hover:shadow-md smooth-transition">
                <div className="flex items-center gap-x-2">
                  <span className="p-2 rounded-lg bg-blue-200">
                    <LuClock2 className="size-4 text-blue-700" />
                  </span>

                  <span className="uppercase text-sm font-bold text-blue-700">
                    Duration
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-xl font-black  text-blue-900">
                    {duration}
                  </p>
                  <span className="text-sm font-bold text-blue-900">days</span>
                </div>
              </div>
              {/* <LuDollarSign className="size-5 text-green-600" /> */}
              {/* <FiCalendar className="size-5 text-blue-700" /> */}
            </div>
          </div>
          {canChangeStatus ? (
            <button
              onClick={() => setOpen(true)}
              className="primary-btn py-2 font-bold"
            >
              Change Status
            </button>
          ) : (
            ''
          )}
        </div>
      </article>
      {canChangeStatus ? (
        <Modal
          title={'Manage Proposal Status'}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={id}
            proposalClient={client}
            onClose={() => setOpen(false)}
          />
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProposalCard;
