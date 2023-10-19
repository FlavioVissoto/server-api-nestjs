import { Mapper, MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { UserEntity } from '../../database/entities';

import { CreateUserRequest } from '../../contracts/request/user';
import { UserResponse } from './../../contracts/response/user';

export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (m) => {
      createMap(
        m,
        CreateUserRequest,
        UserEntity,
        forMember(
          (dest) => dest.typeUser,
          mapFrom((src) => src.typeUser ?? 1)
        ),
        forMember(
          (dest) => dest.password,
          mapFrom((src) => src.pass)
        )
      );
      createMap(m, UserEntity, UserResponse);
    };
  }
}
